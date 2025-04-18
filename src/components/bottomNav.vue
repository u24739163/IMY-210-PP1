<!--u24739163 Mulondi Makhado-->
<script setup>
import {ref} from 'vue'
const isOpenSort = ref(false)
const isOpenFilter = ref(false)
</script>

<template>
    <div class="bottom-nav">
        <nav>
          <ul>
            <li @click="isOpenSort = true">Sort</li>
            <teleport to="body">
                <div class="modal" v-if="isOpenSort">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2>Sort</h2>
                        </div>
                        <input type="radio" name="sort-radio" value="none" checked>
                        <label> None</label><br>
                        <input type="radio" name="sort-radio" value="ASC">
                        <label> A - Z</label><br>
                        <input type="radio" name="sort-radio" value="DESC">
                        <label> Z - A</label><br>
                        <input type="radio" name="sort-radio" value="newest">
                        <label> Newest</label><br>
                        <input type="radio" name="sort-radio" value="oldest">
                        <label> Oldest</label><br>
                        <input type="radio" name="sort-radio" value="edited">
                        <label> Last edited</label>
                        <br><br>
                        <div class="modal-buttons">
                            <button class="btn btn-indicate-permenant" @click="isOpenSort = false">Apply</button>
                        </div>
                    </div>
                </div>
            </teleport>
            <li @click="isOpenFilter = true">Filter</li>
            <teleport to="body">
                <div class="modal" v-if="isOpenFilter"> 
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2>Filter Date modified</h2>
                        </div>
                        <input type="radio" name="filter-radio" value="none" checked>
                        <label> None</label><br>
                        <input type="radio" name="filter-radio" value="day">
                        <label> Today</label><br>
                        <input type="radio" name="filter-radio" value="week">
                        <label> Last 7 days</label><br>
                        <input type="radio" name="filter-radio" value="month">
                        <label> Last 30 days</label><br>
                        <input type="radio" name="filter-radio" value="year">
                        <label> Last year</label><br><br>
                        <div class="modal-buttons">
                            <button class="btn btn-indicate-permenant" @click="isOpenFilter = false">Apply</button>
                        </div>
                    </div>
                </div>
            </teleport>
          </ul>
        </nav>
    </div>
</template>

<style>


</style>