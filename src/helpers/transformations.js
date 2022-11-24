export const toObjectList = (items, type) => {
    let obj = {}
    const data = []


    switch (type) {
        case "CLIENT":
            for (const x in items) {
                obj = {
                    id: items[x].id,
                    firstname: items[x].firstname,
                    lastname: items[x].lastname,
                    mail: items[x].mail,
                    tel: items[x].Tel,
                    url: items[x].url

                }
            }
            data.push(obj)
            break;
        case "PROJECT":
            obj = {
                id:"",
                name: "",
                description: "",
                technology: "",
                clientId: "",
                invoiceId: ""
            }
            items.projects.map(x => {
                obj.id=x.id
                obj.name=x.attributes.name
                obj.description=x.attributes.description
                obj.technology=x.attributes.technology
                obj.clientId=x.attributes.client.id
                obj.invoiceId="x.relationships.invoice.data.id"
            })
            console.log(obj)
            data.push(obj)
            break;
    }
    return data
}






