import Vue from 'vue';

export const UploaderService = new Vue({
	data() {
	    return {
			datasetName: '',
			datasetDescription: '',
			// TODO: later on, file will be encrypted before it is submitted...
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
					value: 'some value for it'
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
			this.$data.additionalMetadata.push({
				key: 'anotherAdditionalKey',
				value: 'some value for it'
			})
		},
		removeKey (key) {
			const position = this.$data.additionalMetadata.findIndex(p => {
				return p.key === key
			})
			this.$data.additionalMetadata.splice(position, 1)
		},
		uploadDataset () {
			if (this.checkRequiredData()) {
				// TODO: call clau's services (IPFS, Blockchain, and others)
				console.log('Dataset name: ' + this.$data.datasetName)
				console.log('Dataset description: ' + this.$data.datasetDescription)
				console.log('Dataset file name: ' + this.$data.datasetFile.name)
				console.log('Mandatory metadata: ')
				console.log(this.$data.mandatoryMetadata.forEach(function(item, index, array) {
					console.log('-' + item.key + ': ' + item.value)
				}))
				console.log('Additional metadata: ')
				console.log(this.$data.additionalMetadata.forEach(function(item, index, array) {
					console.log('-' + item.key + ': ' + item.value)
				}))
			} else {
				alert('this shit bro!')
			}
		},
		checkRequiredData () {
			if (this._isEmptyOrSpaces(this.$data.datasetName)) {
				return false
			}
			if (this._isEmptyOrSpaces(this.$data.datasetDescription)) {
				return false
			}
			if (!this.$data.datasetFile) {
				return false
			}
			this.$data.mandatoryMetadata.forEach(element => {
				if (this._isEmptyOrSpaces(element.value))
					return false
			});
			return true
		},
		_isEmptyOrSpaces(str){
			return str === null || str.match(/^ *$/) !== null;
		}
	}
});