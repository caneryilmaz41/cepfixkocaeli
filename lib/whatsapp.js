export const WHATSAPP_NUMBER = '905458823907';

export function createWhatsAppLink(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function createServiceRequestMessage(formData) {
  return `Merhaba, telefon servisi için yazıyorum.

Ad Soyad: ${formData.name}
Telefon: ${formData.phone}
Şehir: ${formData.city}

Cihaz: ${formData.device}
Sorun: ${formData.problem}
Not: ${formData.note || 'Yok'}`;
}

export function createQuickMessage(service = '') {
  const baseMessage = 'Merhaba, telefon servisi hakkında bilgi almak istiyorum.';
  return service ? `${baseMessage}\n\nİlgilendiğim hizmet: ${service}` : baseMessage;
}