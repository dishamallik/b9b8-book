const getStoredJobApplication1 = () =>{
    const StoredJobApplication1 = localStorage.getItem('job-applications1');
    if(StoredJobApplication1){
        return JSON.parse(StoredJobApplication1);
    }
    return [];
}


const saveJobApplication1 = id =>{
    const StoredJobApplications1 = getStoredJobApplication1();
    const exists = StoredJobApplications1.find(jobId => jobId=== id);
    if(!exists){
        StoredJobApplications1.push(id);
        localStorage.setItem('job-applications1', JSON.stringify(StoredJobApplications1))
    }

}
 export{ getStoredJobApplication1, saveJobApplication1}