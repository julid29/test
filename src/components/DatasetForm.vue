<template>
	<el-form :model="data" :rules="rules" ref='datasetForm' method='post' enctype='multipart/form-data'>
		<el-form-item label="Dataset Name" prop="datasetName">
			<el-input type='text' class='form-control-file' ref='datasetNameInput' placeholder='Name'
				v-model="data.datasetName"></el-input>
  	</el-form-item>

		<el-form-item label="Dataset Description" prop="datasetDescription">
			<el-input type='text' class='form-control-file' ref='datasetDescriptionInput' placeholder='Description'
				v-model="data.datasetDescription"></el-input>
  	</el-form-item>

		<el-form-item label="Select Dataset" prop="datasetFile">
			<el-input type='file' class='form-control-file' ref='datasetInput'
				v-model="data.datasetFile"></el-input>
  	</el-form-item>

		<el-button type="success" @click='upload'>Upload</el-button>
		<el-button type="warning" @click='clear'>Clear</el-button>
	</el-form>
</template>

<script>
import {UploaderService} from '../service/uploaderService.js'

export default {
  data() {
    return {
			rules: {
				datasetName: [
					{ required: true, message: 'Please add a name for the report', trigger: 'blur'},
					{ min: 5, max: 25, message: 'Length should be 5 to 25', trigger: 'blur'}
				],
				datasetDescription: [
					{ required: true, message: 'A description would be helpful for later search', trigger: 'blur'},
					{ min: 5, max: 50, message: 'Length should be 5 to 50', trigger: 'blur'}
				],
				datasetFile: [
					{ required: true, message: 'A file is required, otherwise this is nothing my friend', trigger: 'blur'}
				]
			}
    };
	},
	computed: {
		data(){
			return UploaderService.$data;
		}
	},
  methods: {
		upload () {
			this.$refs['datasetForm'].validate((valid) => {
				if (valid) {
					UploaderService.uploadDataset()
				} else {
					console.log('validation errors!!')
					return false
				}
			})
		},
		clear () {
			this.$refs['datasetForm'].resetFields()
		}
  }
}
</script>
<style>
  .image {
    width: 100%;
    display: block;
  } 
</style> 
