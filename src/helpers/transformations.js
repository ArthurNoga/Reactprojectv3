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
                data.push(obj)
            }

            break;
        case "PROJECT":
            for (const x in items) {

                obj = {
                    id: items[x].id,
                    name: items[x].attributes.name,
                    description: items[x].attributes.description,
                    technology: items[x].attributes.technology,
                    clientId: items[x].attributes.client.id
                }
                data.push(obj)
            }

            break;
    }
    return data
}






