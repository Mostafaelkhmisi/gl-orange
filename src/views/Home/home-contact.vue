<template>
<div class="contact-section">
    <SectionTitle>
        <template #title> <span>CONTACT</span> US </template>
    </SectionTitle>
    <div class="custom80-Container">
        <div class="row m-0 p-0">
            <div class="col-md-12 col-lg-6">
                <div class="contact-imgContainer">
                    <img src="@assets/imgs/backgrounds/976758.jpg" alt="">
                    <p>Orange values your feedback, suggestions or inquiry. Please submit your details to us and we will respond as soon as possible.</p>
                </div>
            </div>
            <div class="col-md-12 col-lg-6">
                <form class="home_contact_form" action="" autocomplete="off" @submit.prevent="onSubmit">
                    <div class="col-12 inputContainer">
                        <label for="name" :class='clazzName'> Name </label>
                        <input @focus="onFocusName($event)" v-model="form.name" @blur="onBlur"  class="inputs" id="name" type="text" required>
                        <p :class="{ 'contact-errors-text-show': !$v.form.name.minLen }" class="contact-errors-text" v-if="!$v.form.name.minLen"> Your name cant be less than {{ $v.form.name.$params.minLen.min }} characters.</p>
                    </div>

                    <div class="col-12 inputContainer">
                        <label for="email" :class='clazzEmail'> Email</label>
                        <input @focus="onFocusEmail($event)" v-model="form.email" @blur="onBlur" class="inputs" id="email" type="email" required>
                        <p :class="{ 'contact-errors-text-show': !$v.form.email.email }" class="contact-errors-text" v-if="!$v.form.email.email"> Please enter valid email.</p>
                    </div>
                    <div class="col-12 inputContainer">
                        <label for="subject" :class='clazzSubject'> Subject</label>
                        <input @focus="onFocusSubject($event)" v-model="form.subject" @blur="onBlur" class="inputs" id="subject" type="text" required>
                        <p :class="{ 'contact-errors-text-show': !$v.form.subject.minLen }" class="contact-errors-text" v-if="!$v.form.subject.minLen"> Please enter valid subject.</p>
                    </div>
                    <div class="col-12 inputContainer">
                        <label for="yourMessage" :class='clazzTextArea'>Your message</label>
                        <textarea @focus="onFocusTextArea($event)" v-model="form.textArea" @blur="onBlur" class="inputs" id="yourMessage" name="yourMessage" rows="6" required></textarea>
                        <p :class="{ 'contact-errors-text-show': !$v.form.textArea.minLen }" class="contact-errors-text" v-if="!$v.form.textArea.minLen"> Your message cant be less than {{ $v.form.textArea.$params.minLen.min }} characters.</p>
                    </div>
                     <div class="col-12 formBtn" > <button :class="{disabledColor : $v.form.$error}" > Submit</button> </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SectionTitle from '@components/layout/SectionTitle.vue'
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  components: { SectionTitle },
  data () {
    return {
      nameActive: false,
      EmailActive: false,
      SubjectActive: false,
      textArea_Active: false,
      form: {
        name: '',
        email: '',
        subject: '',
        textArea: ''
      }
    }
  },
  validations: {
    form: {
      name: { required, minLen: minLength(3) },
      email: { required, email },
      subject: { required, minLen: minLength(3) },
      textArea: { required, minLen: minLength(10) }
    }
  },
  methods: {
    onFocusName: function (event) {
      event.target.select()
      this.nameActive = true
    },
    onFocusEmail: function (event) {
      event.target.select()
      this.EmailActive = true
    },
    onFocusSubject: function (event) {
      event.target.select()
      this.SubjectActive = true
    },
    onFocusTextArea: function (event) {
      event.target.select()
      this.textArea_Active = true
    },
    onBlur: function (event) {
      if (this.form.name.length <= 0) {
        this.nameActive = false
      }
      if (this.form.email.length <= 0) {
        this.EmailActive = false
      }
      if (this.form.subject.length <= 0) {
        this.SubjectActive = false
      }
      if (this.form.textArea.length <= 0) {
        this.textArea_Active = false
      }
    },
    onSubmit () {
      this.$v.form.$touch()
      if (this.$v.form.$pending || this.$v.form.$error) return
      // this.$store.dispatch('signup', formData)
      console.log('submitted')
      this.form.name = ''
      this.form.email = ''
      this.form.subject = ''
      this.form.textArea = ''
    }
  },
  computed: {
    clazzName: function () {
      let clzz = 'activeInput'
      if (this.nameActive === false) {
        clzz = ''
      }
      return clzz
    },
    clazzEmail: function () {
      let clzz = 'activeInput'
      if (this.EmailActive === false) {
        clzz = ''
      }
      return clzz
    },
    clazzSubject: function () {
      let clzz = 'activeInput'
      if (this.SubjectActive === false) {
        clzz = ''
      }
      return clzz
    },
    clazzTextArea: function () {
      let clzz = 'activeInput'
      if (this.textArea_Active === false) {
        clzz = ''
      }
      return clzz
    }
  }
}
</script>

<style>
</style>
