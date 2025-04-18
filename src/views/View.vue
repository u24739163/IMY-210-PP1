<!--u24739163 Mulondi Makhado-->
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const isLocked = ref(true);
const isOpenTransform = ref(false);
const isOpenValidate = ref(false);
const isOpenDelete = ref(false);
const isOpenEdit = ref(false);
const toggleEdit = () => {
isLocked.value == false ? isOpenEdit.value = true : isOpenEdit.value = false;
isLocked.value == true ? isLocked.value = false : false;
};
const xmlContent = ref(`<?xml version="1.0" encoding="UTF-8"?>
<menu 
  vs:noNamespaceSchemaLocation="xsd.xsd" 
  xmlns:vs="http://www.w3.org/2001/XMLSchema-instance"
>
  <item option="no"> 
    <name>Hamburglar</name> 
    <ing>cows 255 charc</ing>
    <price unit="rands">1</price>
  </item>
</menu>`);
//isLocked.value = !isLocked.value; 

</script>

<template>
  <div class="view-container">
  <h1>XML File</h1><br>
  <div class="textarea-container">
    <textarea v-model="xmlContent" :disabled="isLocked" rows="35" cols="50" style="resize: none;" ></textarea>
  </div>
  <div class="content-container">
    <div class="upper-content">
      <div>
        <RouterLink :to="{ name: 'Stylesheet'}"><button class="btn">Select Stylesheet XSLT</button></RouterLink>
        <button class="x-btn btn-remove">Clear</button><br>
        <a>No file selected</a>
      </div>
      <br>
      <div>
        <RouterLink :to="{ name: 'Schema'}"><button class="btn">Select Schema XSD</button></RouterLink>
        <button class="x-btn btn-remove">Clear</button><br>
        <a>No file selected</a>
      </div><br>
      <div>
        <button @click="isOpenTransform = true" class="btn">Transform file</button>
        <teleport to="body">
          <div class="modal" v-if="isOpenTransform">
            <div class="modal-content">
              <div class="modal-header">
                <h2>File has been transformed</h2>
              </div>
              <div class="modal-buttons">
                <button class="btn btn-indicate-permenant" @click="isOpenTransform = false">Close</button>
              </div>
            </div>
          </div>
        </teleport>
      </div><br>
      <div>
        <button @click="isOpenValidate = true" class="btn">Validate file</button>
        <teleport to="body">
          <div class="modal" v-if="isOpenValidate">
            <div class="modal-content">
              <div class="modal-header">
                <h2>File has been validated</h2>
              </div>
              <div class="modal-buttons">
                <button class="btn btn-indicate-permenant" @click="isOpenValidate = false">Close</button>
              </div>
            </div>
          </div>
        </teleport>
      </div>
    </div>
    <div class="lower-content">
      <div>
      <button class="btn" @click="toggleEdit">{{ isLocked ? 'Edit file' : 'Close edit'}}</button><br><br>
      <teleport to="body">
          <div class="modal" v-if="isOpenEdit">
            <div class="modal-content">
              <div class="modal-header">
                <h2>Do you want to save your changes?</h2>
                <button class="x-btn btn-remove" @click="isOpenEdit = false">X</button>
              </div>
              <div class="modal-buttons">
                <button class="btn btn-indicate-permenant" @click="isOpenEdit = false; isLocked = true">Yes</button>
                <button class="btn" @click="isOpenEdit = false; isLocked = true">No</button>
              </div>
          </div>
          </div>
        </teleport>
      </div>
      <div>
      <button @click="isOpenDelete = true" class="btn btn-remove-permenant">Delete file</button>
      <teleport to="body">
          <div class="modal" v-if="isOpenDelete">
            <div class="modal-content">
              <div class="modal-header">
                <h2>Are you sure you want to delete this file?</h2>
                <button class="x-btn btn-remove" @click="isOpenDelete = false">X</button>
              </div>
              <div class="modal-buttons">
                <RouterLink to="/"><button class="btn" @click="isOpenDelete = false">Yes</button></RouterLink>
                <button class="btn btn-indicate-permenant" @click="isOpenDelete = false">No</button>
              </div>
            </div>             
          </div>
        </teleport>
      </div>
    </div>
  </div>
  <div class="close-container">
    <div>
        <RouterLink to="/"><button class="btn btn-remove">Close file</button></RouterLink>
    </div>
  </div>
  </div>
</template>