const getTimeStamp = ():string => {
    return new Date().toISOString();
}

const log = (namespace: string, message: string, type: string, object?: any) => {
    console.log(`[${getTimeStamp()}] [${type.toUpperCase()}] [${namespace}] ${message}`, object ? object : '');
};

export default log;