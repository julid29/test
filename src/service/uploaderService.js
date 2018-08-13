import Vue from 'vue';

export const UploaderService = new Vue({
	data() {
	    return {
			datasetName: '',
			datasetDescription: '',
			datasetFile: null,
			mandatoryMetadata: [
				{
					key: 'name',
					value: ''
				},
				{
					key: 'hash',
					value: ''
				},
				{
					key: 'someLastRequieredMetadata',
					value: ''
				}
			],
			additionalMetadata: [
				{
					key: 'firstAdditionalKey',
					value: ''
				}
			]
		};
	},
	computed: {
		countKeyValuePairs(){
			return this.$data.mandatoryMetadata.length + this.$data.additionalMetadata.length
		}
	},
	methods: {
		addNewKey () {
			this.$data.additionalMetadata.push({ key: '', value: ''})
		},
		removeKey (key) {
			const position = this.$data.additionalMetadata.findIndex(p => {
				return p.key === key
			})
			this.$data.additionalMetadata.splice(position, 1)
		},
		addToMandatory (data) {
			const index = this.$data.mandatoryMetadata.findIndex(p => {
				return p.key === key
			})

			if (index === -1) {
				this.$data.mandatoryMetadata.push(data)
			} else {
				this.$data.mandatoryMetadata.splice(indexedDB, 1, data)
			}
		},
		addToAdditional (data) {
			const index = this.$data.additionalMetadata.findIndex(p => {
				return p.key === key
			})

			if (index === -1) {
				this.$data.additionalMetadata.push(data)
			} else {
				this.$data.additionalMetadata.splice(indexedDB, 1, data)
			}
		},
		uploadDataset () {
			this.checkRequiredData()

			// TODO: call clau's services
		},
		checkRequiredData () {
			if (_isEmptyOrSpaces(this.$data.datasetName.datasetName)) {
				return false
			}
			if (_isEmptyOrSpaces(this.$data.datasetDescription)) {
				return false
			}
			if (_isEmptyOrSpaces(this.$data.datasetFile)) {
				return false
			}
			this.$data.mandatoryMetadata.forEach(element => {
				if (_isEmptyOrSpaces(element))
					return false
			});
			return true
		},
		_isEmptyOrSpaces(str){
			return str === null || str.match(/^ *$/) !== null;
		}
	}
});