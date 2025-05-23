let arr = [-2, -3, -1, 2]
let largest = arr.reduce((res, itm, i) => {
	if (i === 0) return res
	let newSum = itm + arr[i - 1]
	if (newSum > res?.sum) return { sum: newSum, items: [arr[i - 1], itm] }

	return res
}, { sum: 0, items: [] });