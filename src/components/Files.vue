<!--u24739163 Mulondi Makhado-->
<script setup>
import { ref } from 'vue';
const isOpenAddFile = ref(false);
</script>

<template>
  <div class="container">
    <button @click="isOpenAddFile = true" class="add-file">
      Add a file
    </button>
    <teleport to="body">
          <div class="modal" v-if="isOpenAddFile">
            <div class="modal-content">
              <div class="modal-header">
                <h2>File added</h2>
              </div>
              <div class="modal-buttons">
                <button class="btn btn-indicate-permenant" @click="isOpenAddFile = false">Close</button>
              </div>
            </div>             
          </div>
      </teleport>
    <div v-for="n in 40" :key="n" class="file-wrapper">
      <RouterLink :to="{ name: 'View' }" class="file-link">
        <button class="file">
          File {{ n }}.xml
        </button>
      </RouterLink>
    </div>
  </div>
</template>
