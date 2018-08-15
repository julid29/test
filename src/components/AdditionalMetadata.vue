<template>
	<el-table :data="additionalMetadata" stripe style="width: 100%">
    <el-table-column label="Key" prop="key" >
			<template scope="props">
				<el-input v-model="props.row.key" placeholder="firstAdditionalKey"/>
      </template>
		</el-table-column>
		<el-table-column label="Value" prop="value">
			<template scope="props">
				<el-input v-model="props.row.value" placeholder="some value for it"/>
      </template>
		</el-table-column>
		<el-table-column label="Operations" prop="key">
			<template scope="props">
				<el-button type="success" icon="plus" size="mini" @click='addNewKey()'></el-button>
				<el-button type="danger" icon="minus" size="mini" @click='removeKey(props.row.key)'
					:disabled="additionalMetadata.length === 1"></el-button>
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
		removeKey (key) {
			UploaderService.removeKey(key)
		},
		addNewKey () {
			UploaderService.addNewKey();
		}
	}
}
</script>
