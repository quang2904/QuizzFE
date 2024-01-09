<template>
  <div>
    <form class="form-auth">
      <h1 class="mb-7 text-center text-3xl">Login</h1>
      <div class="form-item mb-6">
        <a-input placeholder="Email" />
      </div>
      <div class="form-item mb-6">
        <a-input placeholder="Password" />
      </div>
      <div class="form-item mb-6">
        <a-input placeholder="Confirm Password" />
      </div>
      <a-button class="button-auth" block type="primary">Login</a-button>
    </form>
  </div>
</template>

<script setup lang="ts"></script>
