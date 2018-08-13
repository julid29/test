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
				console.log('Dataset name: ' + this.$data.datasetName)
				console.log('Dataset description: ' + this.$data.datasetDescription)
				console.log('Dataset file name: ' + this.$data.datasetFile.name)
				console.log('Mandatory metadata: ' + this.$data.mandatoryMetadata.toString())
				console.log('Additional metadata: ' + this.$data.additionalMetadata.toString())
			} else {
				alert('this shit bro!')
			}
			// TODO: call clau's services
		},
		checkRequiredData () {
			if (this._isEmptyOrSpaces(this.$data.datasetName)) {
				return false
			}
			if (this._isEmptyOrSpaces(this.$data.datasetDescription)) {
				return false
			}
			if (this._isEmptyOrSpaces(this.$data.datasetFile)) {
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