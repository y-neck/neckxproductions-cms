<template>
  <div>
    <form
      id="contact-form"
      @submit.prevent="handleSubmit"
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
          v-model:="form.name"
        />
      </label>
      <label>
        Email:
        <input
          id="email_input_field"
          type="email"
          name="email"
          v-model:="form.email"
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
            v-model="form.hpCheckbox"
          />
        </label>
        <label>
          Wenn du dieses Feld siehst, fülle es nicht aus.
          <input
            type="text"
            id="winnie-poo_text"
            name="winnie-poo-text"
            v-model="form.hpText"
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
          v-model="form.message"
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
import { ref } from 'vue';

const access_key = process.env.WEB3_KEY;

// Get form inputs
const form = ref({
  name: '',
  email: '',
  message: '',
  hpCheckbox: false,
  hpText: '',
});

const result = ref('');
const status: any = ref('');

// Validation functions
function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

function isHoneypotEmpty(): boolean {
  return !form.value.hpCheckbox && form.value.hpText.trim() === '';
}

// Form validation
function validateForm(): boolean {
  if (!isNotEmpty(form.value.name)) {
    alert('Bitte geben Sie Ihren Namen ein.');
    return false;
  }

  if (!isEmail(form.value.email)) {
    alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    return false;
  }

  if (!isNotEmpty(form.value.message)) {
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
const handleSubmit = async () => {
  // // DEBUG:
  // console.log({
  //   name: name.value,
  //   email: email.value,
  //   message: message.value,
  // });
  result.value = 'Please wait...';

  const enc_email: string = atob('eWFubmlja0BuZWNrWHByb2R1Y3Rpb25zLmNo'); //Base64-encoded email address;

  if (!validateForm()) {
    console.error('Validation failed');
    return;
  }

  try {
    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        access_key: access_key,
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        hpCheckbox: form.value.hpCheckbox,
        hpText: form.value.hpText,
      },
    });
    // DEBUG:
    console.log('Form submitted:', response);
  } catch (error: any) {
    // Print the error object to inspect it
    console.error('Error sending email:', error);
    alert(
      'Beim Senden Ihrer Anfrage ist ein Fehler aufgetreten. Stattdessen als Email senden?'
    );

    // DEBUG:
    console.log('Email sent unsuccessfully, reverting to plain email method');

    //Fallback to plain email method
    class Email {
      name: string;
      email: string;
      message: string;
      constructor(name: string, email: string, message: string) {
        this.name = name;
        this.email = email;
        this.message = message;
      }
    }

    let inq = new Email(form.value.name, form.value.email, form.value.message);
    // Construct the mailto URL
    let mailtoLink = `mailto:${enc_email}?subject=Anfrage neckXproductions&body=Name: ${encodeURIComponent(
      inq.name
    )}%0AEmail: ${encodeURIComponent(
      inq.email
    )}%0A%0AMessage:%0A${encodeURIComponent(inq.message)}`;
    // Create a temporary link element to trigger the mailto action
    let tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  } finally {
    // Reset form after submission
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';

    // Clear result and status after 5 seconds
    setTimeout(() => {
      result.value = '';
      status.value = '';
    }, 5000);
  }
};
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
