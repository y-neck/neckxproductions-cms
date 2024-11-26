<template>
  <div>
    <form
      id="contact-form"
      @submit="handleSubmit"
      method="post"
      class="flex flex-col gap-[30px]"
    >
      <label>
        Name:
        <input
          id="name_input_field"
          type="text"
          name="name"
          placeholder="Name"
          required
          v-model:="name"
        />
      </label>
      <label>
        Email:
        <input
          id="email_input_field"
          type="email"
          name="email"
          v-model:="email"
          placeholder="Email"
          required
        />
      </label>
      <div id="winnie-poo">
        <label>
          Wenn du diese Checkbox siehst, fülle sie nicht aus.
          <input
            id="winnie-poo_checkbox"
            type="checkbox"
            name="winnie-poo-checkbox"
            v-model="hpCheckbox"
          />
        </label>
        <label>
          Wenn du dieses Feld siehst, fülle es nicht aus.
          <input
            type="text"
            id="winnie-poo_text"
            name="winnie-poo-text"
            v-model="hpText"
          />
        </label>
      </div>
      <label>
        Deine Anfrage:
        <textarea
          id="inquiry_input_field"
          name="inquiry"
          required
          min-length="5"
          class="min-h-15"
          v-model="message"
        ></textarea>
      </label>
      <button
        id="submitBtn"
        type="submit"
        class="bg-primary text-background hover:bg-accent hover:text-primary transition-all rounded-[5px] px-[24px] py-[5px] max-w-fit"
      >
        Anfrage senden
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Resend } from 'resend';
import { ref } from 'vue';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

// Get form inputs
const name = ref('');
const email = ref('');
const message = ref('');
const hpCheckbox = ref(false);
const hpText = ref('');

// Validation functions
function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

function isHoneypotEmpty(): boolean {
  return !hpCheckbox.value && hpText.value.trim() === '';
}

// Form validation
function validateForm(): boolean {
  if (!isNotEmpty(name.value)) {
    alert('Bitte geben Sie Ihren Namen ein.');
    return false;
  }

  if (!isEmail(email.value)) {
    alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    return false;
  }

  if (!isNotEmpty(message.value)) {
    alert('Bitte geben Sie eine Anfrage ein.');
    return false;
  }

  if (!isHoneypotEmpty()) {
    console.error('Honeypot triggered');
    return false;
  }

  return true;
}

// Form submission
async function handleSubmit(event: Event) {
  event.preventDefault(); // Prevent default behavior

  if (!validateForm()) {
    console.error('Validation failed');
    return;
  }

  try {
    const response = await resend.emails.send({
      from: `${email.value}`,
      to: ['yannick@neckxproductions.ch'], // Replace with recipient email
      subject: 'Neue Anfrage via neckXproductions.ch',
      html: `
        <p><strong>Name:</strong> ${name.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p>${message.value}</p>
      `,
    });

    console.log('Email sent successfully:', response);
    alert('Ihre Anfrage wurde erfolgreich gesendet.');
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Beim Senden Ihrer Anfrage ist ein Fehler aufgetreten.');
  }
}
</script>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  background-color: #535353;
  color: #eee;
}
#winnie-poo {
  display: none;
}
</style>
