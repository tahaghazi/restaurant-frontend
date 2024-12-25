<template>
  <!-- <NuxtLoadingIndicator color="#000" /> -->
  <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="referrer" content="always">
        <link rel="canonical" href="{{ $page->getUrl() }}">

        <meta name="description" content="{{ $page->description }}">


  <NuxtLayout>
    <NuxtPage />
    <Alerts />
  </NuxtLayout>
</template>
