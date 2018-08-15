<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="12">
        <h1>Uploader Manager</h1>
        <h2>File</h2>
        <dataset-form></dataset-form>
      </el-col>
      <el-col :span="12">
        <br><br><br>
        <h2>Dataset Metadata</h2>
        <h3>Mandatory Metadata</h3>
        <mandatory-metadata></mandatory-metadata>
        <br>
        <h3>Additional Metadata</h3>
        <additional-metadata></additional-metadata>
        <br><br>
        <p><b>Dataset is being uploaded with {{ keyValuesQuantity }} metadata items</b></p>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import {UploaderService} from './service/uploaderService.js'

export default {
  name: 'app',
  computed: {
    keyValuesQuantity() {
      return UploaderService.countKeyValuePairs
    }
  }
}
</script>
