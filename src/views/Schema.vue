<!--u24739163 Mulondi Makhado-->
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const isLocked = ref(true);
const isOpenDelete = ref(false);
const isOpenUpload = ref(false);
const toggleEdit = () => {isLocked.value = !isLocked.value;};
const xsdContent = ref(`<?xml version="1.0"?>
<xs:schema 
	xmlns:xs="http://www.w3.org/2001/XMLSchema"
>
	<xs:simpleType name="cust_255">
		<xs:restriction base="xs:string">
			<xs:maxLength value="255"/>
		</xs:restriction>
	</xs:simpleType>
</xs:schema>
`)
</script>

<template>
  <div class="view-container">
    <h1>XSD File</h1><br>
    <div class="textarea-container">
      <textarea v-model="xsdContent" :disabled="isLocked" rows="35" cols="50" style="resize: none;"></textarea>
    </div>
    <div class="content-container">
      <div class="upper-content">
        <div>
          <button @click="isOpenUpload = true" class="btn">Upload Schema file</button><br>
          <teleport to="body">
          <div class="modal" v-if="isOpenUpload">
            <div class="modal-content">
              <div class="modal-header">
                <h2>Your file has been uploaded</h2>
              </div>
              <div class="modal-buttons">
                <button class="btn btn-indicate-permenant" @click="isOpenUpload = false">Close</button>
              </div>
            </div>
          </div>
        </teleport>
          <a>No file uploaded</a>
        </div><br>
        <div>
          <button class="btn" @click="toggleEdit">{{ isLocked ? 'Edit file' : 'Close edit'}}</button><br><br>
        </div>
        <div>
          <RouterLink :to="{name: 'View'}"><button class="btn btn-indicate-permenant">Use file</button></RouterLink>
        </div><br>
      </div>
      <div class="lower-content">
        <div>
            <button @click="isOpenDelete = true" class="btn btn-remove-permenant">Remove file</button>
        <teleport to="body">
          <div class="modal" v-if="isOpenDelete">
            <div class="modal-content">
              <div class="modal-header">
                <h2>Are you sure you want to remove this file?</h2>
                <button class="x-btn btn-remove" @click="isOpenDelete = false">X</button>
              </div>
              <div class="modal-buttons">
                <RouterLink :to="{name: 'View'}"><button class="btn btn-remove" @click="isOpenDelete = false">Yes</button></RouterLink>
                <button class="btn btn-indicate-permenant" @click="isOpenDelete = false">No</button>
              </div>
            </div>             
          </div>
        </teleport>
        </div>
      </div>
      <div class="close-container">
    <div>
        <RouterLink :to="{name: 'View'}"><button class="btn btn-remove">Close file</button></RouterLink>
    </div>
  </div>
    </div>
  </div>
</template>