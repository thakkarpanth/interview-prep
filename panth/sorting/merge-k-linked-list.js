class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];

    const mid = Math.floor(lists.length / 2);
    const leftLists = lists.slice(0, mid);
    const rightLists = lists.slice(mid);

    const leftMerged = mergeKLists(leftLists);
    const rightMerged = mergeKLists(rightLists);

    return mergeTwoLists(leftMerged, rightMerged);
}

function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// Example usage:
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const merged = mergeKLists([list1, list2, list3]);
console.log(JSON.stringify(merged));