/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Breadcrumb = () => {
    return (
        // <!-- ##### Breadcrumb Area Start ##### -->
        <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        //<!-- ##### Breadcrumb Area End ##### -->
    );
};

export default Breadcrumb;
