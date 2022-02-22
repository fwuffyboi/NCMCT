import type { NextPage } from 'next'

const therewasanerror: NextPage = () => {
    return (
        <div className="flex h-screen bg-black text-white">
            <div className="m-auto">
                <form name="contact" data-netlify="true">
                    <div className="bg-black text-white">
                        <div className="">
                            <label className="block pb-2" htmlFor="name">Name or email:</label>
                            <input className="text-black w-full" type="text" name="name" />
                        </div>
                        
                        <div className="rounded px-70 pt-5 pb-2">
                            <label htmlFor="textDescription" className="block pb-2">Error description: </label>

                            <textarea className="text-black" placeholder="Please enter the description of the error you are reporting here..." name="textDescription" cols={50} rows={10} ></textarea>
                        </div>

                        <div className="pt-2">
                            <label htmlFor="myfile" className="block pb-2">Attach an image: </label>
                            <input type="file" id="myfile" name="myfile"></input>
                        </div>

                        <div className="flex justify-center pt-2">
                            <button className="p-2 bg-blue-800 mt-2 rounded-lg group hover:bg-white flex itmes-cente" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="inline-block mr-5 fill-white group-hover:fill-black self-center">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                                </svg>
                                <p className="text-white group-hover:text-black">Send</p>
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
  }
  
export default therewasanerror