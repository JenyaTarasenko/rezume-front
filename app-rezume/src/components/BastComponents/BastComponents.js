import './style.css';



function BasComponent() {
    return (
        <div>
            <div className='bast-box_section'>
                <div className='bast-box_conteiner'>
                    {/* card bast-box */}
                    <div className='bast-box'>
                        <div className='box-avatar'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                            </svg>
                        </div>
                        <div className='bast-box_items'>
                            <h4>Full cycle</h4>
                        </div>
                        <div className='bast-box_description'>
                            <p>Creating full-cycle web applications: from architecture design to launching the finished product.</p>
                        </div>
                    </div>
                    {/* card bast-box */}

                    {/* card bast-box */}
                    <div className='bast-box'>
                        <div className='box-avatar'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                            </svg>
                        </div>
                        <div className='bast-box_items'>
                            <h4>Scaling</h4>
                        </div>
                        <div className='bast-box_description'>
                            <p>Optimization and scaling: ensuring your project is stable, fast, and ready to grow.</p>
                        </div>
                    </div>
                    {/* card bast-box */}

                    {/* card bast-box */}
                    <div className='bast-box'>
                        <div className='box-avatar'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                            </svg>
                        </div>
                        <div className='bast-box_items'>
                            <h4>Functional UI</h4>
                        </div>
                        <div className='bast-box_description'>
                            <p>Modern UI: developing adaptive, functional and intuitive UI based on React and other libraries.</p>
                        </div>
                    </div>
                    {/* card bast-box */}
                </div>
            </div>
        </div>
    );
}

export default BasComponent;


