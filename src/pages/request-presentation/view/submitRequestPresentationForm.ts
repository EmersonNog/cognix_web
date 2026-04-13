const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ?? ''

export type RequestPresentationSubmission = {
  email: string
  focus: string
  message: string
  name: string
  profile: string
  whatsapp: string
}

type Web3FormsResponse = {
  message?: string
  success?: boolean
}

export function isRequestPresentationDirectSendConfigured() {
  return WEB3FORMS_ACCESS_KEY.length > 0
}

export async function submitRequestPresentationForm(
  formState: RequestPresentationSubmission,
) {
  if (!isRequestPresentationDirectSendConfigured()) {
    return {
      message:
        'O envio direto ainda não está configurado neste ambiente. Adicione VITE_WEB3FORMS_ACCESS_KEY para ativar o formulário.',
      success: false,
    }
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        botcheck: '',
        email: formState.email,
        focus: formState.focus,
        from_name: 'Site | Cognix HUB',
        message: formState.message || '-',
        name: formState.name,
        profile: formState.profile,
        replyto: formState.email,
        subject: `Solicitação de apresentação - ${formState.name}`,
        whatsapp: formState.whatsapp || '-',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = (await response.json()) as Web3FormsResponse

    if (!response.ok || !result.success) {
      return {
        message:
          result.message ||
          'Não foi possível enviar sua solicitação agora. Tente novamente em instantes.',
        success: false,
      }
    }

    return {
      message:
        'Solicitação enviada com sucesso. O time do Cognix deve responder pelos canais informados.',
      success: true,
    }
  } catch {
    return {
      message:
        'Não foi possível conectar ao serviço de envio agora. Tente novamente em alguns minutos.',
      success: false,
    }
  }
}
