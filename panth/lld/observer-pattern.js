/* 
    implement notify me when stock is available can be implemented via this pattern 
*/

/*

    observable -> whenever state changes it notifies observer
    observer -> 

    observable class {
        list<observer> observerList;
        add(observer o1)
        remove(observer o2)
        notify() {
            for (const observer : observerList) {
                observer.update()
            }
        }
        setData()
    }
    observer class {
        update()
    }
*/