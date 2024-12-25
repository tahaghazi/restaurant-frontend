<template>
  <section class="relative flex min-h-screen w-full flex-col items-center px-4 pb-36 pt-20 xs:px-6 md:pt-32 lg:px-8 xl:pb-44" aria-labelledby="login-heading">
    <template></template>
    <h1 class="sr-only" id="login-heading">Login</h1>
    <div class="rounded-md border border-gray-300 px-2 py-2 shadow-sm">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    </div>
    <div class="pt-8 text-lg font-medium xs:text-xl 2xl:text-2xl">Welocme again!</div>
    <div class="pt-4 text-sm text-gray-600 xs:text-base">Please Login</div>
    <div class="mx-auto w-full max-w-sm pt-10">
      <form @submit="login">
        <fieldset class="space-y-5">
          <div class="w-full space-y-3">
            <label class="text-sm font-medium xs:text-base">E-mail</label>
            <div class="relative"><input v-model="email" class="form-control h-[50px] appearance-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-600" type="email" name="email" placeholder="ادخل عنوان بريدك الإلكتروني" /></div>
            <div class="text-xs text-red-600"></div>
          </div>
          <div class="w-full space-y-3">
            <label class="text-sm font-medium xs:text-base">Password</label>
            <div class="relative"><input v-model="password" class="form-control h-[50px] appearance-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-600" type="password" name="password" placeholder="ادخل كلمة المرور الخاصة بك" /><button class="absolute h-[50px] items-center justify-center px-4 py-4 text-gray-600 hover:text-gray-900 ltr:right-0 rtl:left-0" type="button" title="اظهار/اخفاء كلمة المرور"></button></div>
            <div class="text-xs text-red-600"></div>
          </div>

          <div>
            <div class="text-xs text-red-600"></div>
            <button @click="login" type="button" class="flex h-[50px] items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black w-full">
              <span><span>login </span></span>
            </button>
          </div>
        </fieldset>
      </form>

      <!----><!----><!---->
      <div class="space-x-1 pt-8 text-center text-sm rtl:space-x-reverse xs:text-base">
        <button type="button" class="flex h-[50px] items-center justify-center rounded-md border border-transparent bg-gray-100 text-primary px-8 py-3 text-sm font-medium disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black w-full">
          <span><span> register </span></span>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const email = ref("");
const password = ref("");
const {
  status,

  signIn,
} = useAuth();

const login = async (e: Event) => {
  try {
    // Trigger a signIn with the credentials provider
    signIn({ email:email.value , password: password.value });
    navigateTo("/");
  } catch (e) {
    console.log(e);
  }
};
</script>

<style></style>
