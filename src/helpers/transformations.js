export const toObjectList = (datas, type) => {
    let obj = {}
    const data = []

    for (const x in datas) {


        switch (type) {
            case "CLIENT":
                obj = {
                    id: datas[x].id,
                    firstname: datas[x].firstname,
                    lastname: datas[x].lastname,
                    mail: datas[x].mail,
                    tel: datas[x].Tel,
                    url: datas[x].url
                }
                data.push(obj)
        }
    }



    return data

}

