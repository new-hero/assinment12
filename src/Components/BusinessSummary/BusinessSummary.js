import React from 'react';


const BusinessSummary = () => {
    return (
        <div className='container py-5'>
            <h2>Business Summary</h2>
            <div className='row row-cols-lg-4 row-cols-sm-2 '>
                <div className='col'>
                    <div className='card mb-3'>
                        <span className='w-50 mx-auto text-info'><svg xmlns="http://www.w3.org/2000/svg" class="h-1 w-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" />
                        </svg></span>
                        <h1>58</h1>

                        <h2 className='card-title'>Countries</h2>
                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-3'>
                        <span className='w-50 mx-auto text-info '><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg></span>
                        <h1>100+</h1>

                        <h2 className='card-title'>Complete Project</h2>
                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-3'>
                        <span className='w-50 mx-auto text-info'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg></span>
                        <h1>80+</h1>
                        <h2 className='card-title'>Happy clients</h2>

                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-3'>
                        <span className='w-50 mx-auto text-info'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg></span>
                        <h1>62</h1>

                        <h2 className='card-title'>Feedback</h2>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;