<template>
	<el-form :model="datasetForm" :rules="rules" ref='datasetForm' method='post' enctype='multipart/form-data'>
		<el-form-item label="Dataset Name" prop="name">
			<el-input type='text' class='form-control-file' ref='datasetNameInput' placeholder='Name'
				v-model="datasetForm.name"></el-input>
  	</el-form-item>

		<el-form-item label="Dataset Description" prop="description">
			<el-input type='text' class='form-control-file' ref='datasetDescriptionInput' placeholder='Description'
				v-model="datasetForm.description"></el-input>
  	</el-form-item>

		<el-form-item label="Select Dataset" prop="file">
			<el-input type='file' class='form-control-file' ref='datasetInput'
				v-model="datasetForm.file"></el-input>
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
			datasetForm: {
				name: '',
				description: '',
				file: null
			},
			rules: {
				name: [
					{ required: true, message: 'Please add a name for the report', trigger: 'blur'},
					{ min: 5, max: 25, message: 'Length should be 5 to 25', trigger: 'blur'}
				],
				description: [
					{ required: true, message: 'A description would be helpful for later search', trigger: 'blur'},
					{ min: 5, max: 50, message: 'Length should be 5 to 50', trigger: 'blur'}
				],
				file: [
					{ required: true, message: 'A file is required, otherwise this is nothing my friend', trigger: 'blur'}
				]
			}
    };
  },
  methods: {
		upload () {
			this.$refs['datasetForm'].validate((valid) => {
				if (valid) {

					

					alert('submit!')
				} else {
					console.log('error submit!!')
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
