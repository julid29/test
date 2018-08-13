<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="12">
        <h1>Uploader Manager</h1>
        <dataset-form></dataset-form>
      </el-col>
      <el-col :span="12">
        <h1>Dataset Metadata</h1>
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
  },
  watch: {
    mandatoryData(data) {
      UploaderService.addToMandatory(data)
    },
    additionalData(data) {
      UploaderService.addToAdditional(data)
    }
  }
}
</script>
