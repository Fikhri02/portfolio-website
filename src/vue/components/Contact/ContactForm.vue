<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2 class="section-title gradient-text">Get In Touch</h2>
          <p class="contact-description">
            Have a project in mind or want to collaborate? I'd love to hear from you!
            Fill out the form and I'll get back to you as soon as possible.
          </p>

          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">📧</div>
              <div class="method-details">
                <div class="method-label">Email</div>
                <div class="method-value">alex@example.com</div>
              </div>
            </div>
            <div class="contact-method">
              <div class="method-icon">📱</div>
              <div class="method-details">
                <div class="method-label">Phone</div>
                <div class="method-value">+1 (555) 123-4567</div>
              </div>
            </div>
            <div class="contact-method">
              <div class="method-icon">📍</div>
              <div class="method-details">
                <div class="method-label">Location</div>
                <div class="method-value">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="Your name"
              :class="{ error: errors.name }"
              @blur="validateField('name')"
            />
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="your.email@example.com"
              :class="{ error: errors.email }"
              @blur="validateField('email')"
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              id="subject"
              v-model="formData.subject"
              type="text"
              placeholder="What's this about?"
              :class="{ error: errors.subject }"
              @blur="validateField('subject')"
            />
            <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="5"
              placeholder="Tell me about your project..."
              :class="{ error: errors.message }"
              @blur="validateField('message')"
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>

          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>

          <div v-if="submitSuccess" class="success-message">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);

const validateField = (field: keyof typeof formData) => {
  errors[field] = '';

  if (!formData[field].trim()) {
    errors[field] = 'This field is required';
    return false;
  }

  if (field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      return false;
    }
  }

  return true;
};

const validateForm = () => {
  let isValid = true;
  (Object.keys(formData) as Array<keyof typeof formData>).forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  submitSuccess.value = false;

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));

  console.log('Form submitted:', formData);

  isSubmitting.value = false;
  submitSuccess.value = true;

  // Reset form
  Object.keys(formData).forEach(key => {
    formData[key as keyof typeof formData] = '';
  });

  setTimeout(() => {
    submitSuccess.value = false;
  }, 5000);
};
</script>

<style scoped>
.contact-section {
  background: var(--color-background);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--spacing-16);
}

.contact-description {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-12);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  padding: var(--spacing-5);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base);
}

.contact-method:hover {
  transform: translateX(8px);
}

.method-icon {
  font-size: var(--font-size-3xl);
}

.method-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-1);
}

.method-value {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.contact-form {
  background: var(--color-surface);
  padding: var(--spacing-8);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
}

.form-group {
  margin-bottom: var(--spacing-6);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-4);
  background: var(--color-background);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text);
  font-family: inherit;
  font-size: var(--font-size-base);
  transition: all var(--transition-base);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.1);
}

.form-group input.error,
.form-group textarea.error {
  border-color: var(--color-accent);
}

.error-message {
  display: block;
  margin-top: var(--spacing-2);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
}

.success-message {
  margin-top: var(--spacing-4);
  padding: var(--spacing-4);
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgb(34, 197, 94);
  border-radius: var(--radius-lg);
  color: rgb(34, 197, 94);
  text-align: center;
  animation: fadeInUp 0.5s ease-out;
}

.btn[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-12);
  }
}
</style>
