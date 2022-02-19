export const Errorform = () => {
    return (
        <div className="flex h-screen bg-black text-white">
            <div className="m-auto">
                <form name="contact" data-netlify="true">
                    <div className="bg-black text-white">
                        <p>
                            <label>Name or email: <br /><input className="text-black" type="text" name="name" /></label>
                        </p><br />

                        <div className="rounded px-70">
                            <label>Error description: <br />
                                <textarea className="text-black">Please enter the description of the error you are reporting here...</textarea>
                            </label>
                            <button className="p-1" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                                </svg>
                            </button><br /><br />
                        </div>
                            
                        <div className="">
                            <label>Attach an image: <br /><input type="file" id="myfile" name="myfile"></input></label>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}