<script lang="ts">
  import { writable } from "svelte/store";

    
    const icons = [
      "Twitter",
      "YouTube",
      "TikTok",
      "LinkedIn",
      "GitHub",
      "Custom",
    ];

    const formDefaults = {
      icon: "custom",
      title: "",
      url: "https://",
    };

    const formData = writable(formDefaults);
  
    let showForm = false;
</script>