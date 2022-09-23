export const updateObjectInArray = (items: Array<any>, objPropName: string, compareValue: any, newObjProps: any) => {
    return items.map(i => i[objPropName] === compareValue ? {...i, ...newObjProps} : i)
}