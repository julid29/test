<template>
	<el-table :data="additionalMetadata" stripe style="width: 100%">
    <el-table-column label="Key" prop="key" >
		</el-table-column>
		<el-table-column label="Value" prop="value">
			<template scope="props">
				<el-input :placeholder="props.row.value"/>
      </template>
		</el-table-column>
		<el-table-column label="Operations" prop="key">
			<template scope="props">
				<el-button type="success" icon="plus"
					@click='addNewKey()' size="mini"></el-button>
				<el-button type="danger" icon="minus"
					@click='removeKey(props.row.key)' size="mini"></el-button>
			</template>
    </el-table-column>
	</el-table>
</template>

<script>
import {UploaderService} from '../service/uploaderService.js'

export default {
	computed: {
		additionalMetadata(){
			return UploaderService.$data.additionalMetadata;
		}
	},
	methods: {
		removeKey (key){
			UploaderService.removeKey(key)
		},
		addNewKey (){
			UploaderService.addNewKey();
		}
	}
}
</script>
