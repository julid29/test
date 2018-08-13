<template>
	<el-table :data="mandatoryMetadata" stripe style="width: 100%">
    <el-table-column label="Key" prop="key" >
		</el-table-column>
		<el-table-column label="Value" prop="value">
			<template scope="props">
				<el-input v-model="props.row.value"/>
      </template>
		</el-table-column>
	</el-table>
</template>

<script>
import {UploaderService} from '../service/uploaderService.js'

export default {
	computed: {
		mandatoryMetadata(){
			return UploaderService.$data.mandatoryMetadata;
		}
	}
}
</script>
