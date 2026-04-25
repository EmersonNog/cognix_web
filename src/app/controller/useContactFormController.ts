import { type SyntheticEvent, useState } from 'react'

type ContactFormField = 'name' | 'email' | 'message'

type ContactFormState = Record<ContactFormField, string>

type ContactFormStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialForm: ContactFormState = {
  name: '',
  email: '',
  message: '',
}

export function useContactFormController() {
  const [form, setForm] = useState<ContactFormState>(initialForm)
  const [status, setStatus] = useState<ContactFormStatus>('idle')
  const [feedback, setFeedback] = useState('')

  const updateField = (field: ContactFormField, value: string) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }))
  }

  const handleSubmit = async (
    event: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    event.preventDefault()

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setStatus('error')
      setFeedback('Configuração de envio ausente. Tente novamente mais tarde.')
      return
    }

    try {
      setStatus('submitting')
      setFeedback('')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Novo contato pelo MKT Cognix',
          from_name: 'Cognix',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const result = (await response.json().catch(() => null)) as {
        success?: boolean
        message?: string
      } | null

      if (!response.ok || result?.success === false) {
        throw new Error(result?.message ?? 'Falha ao enviar mensagem.')
      }

      setForm(initialForm)
      setStatus('success')
      setFeedback('Mensagem enviada. Vamos responder assim que possível.')
    } catch {
      setStatus('error')
      setFeedback('Não conseguimos enviar agora. Tente novamente em instantes.')
    }
  }

  return {
    feedback,
    form,
    handleSubmit,
    isSubmitting: status === 'submitting',
    status,
    updateField,
  }
}
