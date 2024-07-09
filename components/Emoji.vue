<template>
  <span class="emoji"></span>
</template>

<style lang="scss" scoped>
@use 'assets/scss/_variables';

.emoji::before {
  content: '🏡';
  font-size: 50px;
  display: inline-block;
  animation: emoji-change 10s linear infinite;
}

@keyframes emoji-change {
  0% {
    content: '🏡';
    transform: translateY(-20px);
    opacity: 0;
  }
  8.33% {
    content: '🏡';
    transform: translateY(0);
    opacity: 1;
  }
  16.66% {
    content: '🏡';
    transform: translateY(0);
    opacity: 1;
  }
  24.99% {
    content: '🏡';
    transform: translateY(20px);
    opacity: 0;
  }
  25% {
    content: '🏢';
    transform: translateY(-20px);
    opacity: 0;
  }
  33.33% {
    content: '🏢';
    transform: translateY(0);
    opacity: 1;
  }
  41.66% {
    content: '🏢';
    transform: translateY(0);
    opacity: 1;
  }
  49.99% {
    content: '🏢';
    transform: translateY(20px);
    opacity: 0;
  }
  50% {
    content: '🏯';
    transform: translateY(-20px);
    opacity: 0;
  }
  58.33% {
    content: '🏯';
    transform: translateY(0);
    opacity: 1;
  }
  66.66% {
    content: '🏯';
    transform: translateY(0);
    opacity: 1;
  }
  74.99% {
    content: '🏯';
    transform: translateY(20px);
    opacity: 0;
  }
  75% {
    content: '🏰';
    transform: translateY(-20px);
    opacity: 0;
  }
  83.33% {
    content: '🏰';
    transform: translateY(0);
    opacity: 1;
  }
  91.66% {
    content: '🏰';
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    content: '🏰';
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
