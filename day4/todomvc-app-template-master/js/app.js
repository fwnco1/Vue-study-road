(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	const vm = new Vue({
		el: '#app',
		data: {
			mission: '',
			id: 2,
			flag: false,
			complete: false,

			missionList: [


			],
			completedList: [],
			activeList: [
				{ id: 1, mission: '我要练马超', complete: false, edit: false },
				{ id: 2, mission: '我要练李白', complete: false, edit: false }
			],

		},
		methods: {
			add() {
				let miss = { id: ++this.id, mission: this.mission, complete: this.complete }
				this.activeList.push(miss)
				this.missionList = this.activeList
				this.mission = ''

			},
			del(id) {
				this.missionList.some((item, i) => {
					if (item.id == id) {
						this.missionList.splice(i, 1)
						return true
					}
				})

			},
			edit(index) {
				console.log(this.missionList[index])

				this.missionList[index].edit = true

			},
			editing(index) {
				console.log(index)
				this.missionList[index].edit = false
			}
			,

			test(complete) {
				console.log(complete);
				complete = !complete
				console.log(complete);

			},
			allComplete() {
				this.complete = !this.complete
				this.missionList.forEach(item => {
					item.complete = this.complete
				});
			},
			completed(index) {
				// console.log(this.missionList[index])
				this.missionList[index].complete = !this.missionList[index].complete



				if (this.missionList[index].complete == true) {
					this.completedList.push(this.missionList[index])
				}
				if (this.missionList[index].complete == false) {
					this.completedList.shift(this.missionList[index])
				}
				let resultarr = [...new Set(this.completedList)];
				this.completedList = resultarr
				// console.log(this.completedList.length);

			},
			allmission() {
				console.log(123);

			},
			allactive() {

				this.missionList.forEach((item, i) => {
					if (item.complete == false) {
						// console.log(this.missionList[i]);

						this.activeList.push(this.missionList[i])
					}
				})
				// console.log(this.activeList);

				// let arr = []
				// this.activeList.forEach((item,i)=>{
				// 	if (item.indexOf(arr)==-1) {
				// 		arr.push(item)
				// 	}
				// })
				// console.log(arr);

				// this.missionList=this.activeList=arr
				let resultarr = [...new Set(this.activeList)];
				this.missionList = resultarr



			},
			allcom() {
				this.missionList.forEach((item, i) => {
					if (item.complete == true) {
						this.completedList.push(this.missionList[i])
					}
				})
				let resultarr = [...new Set(this.completedList)];
				this.missionList = resultarr

			}

		},
		created() {
			this.missionList=this.activeList
		},

	})

})(window);
