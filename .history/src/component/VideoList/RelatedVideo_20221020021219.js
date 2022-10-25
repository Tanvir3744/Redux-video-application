import React from 'react';

const RelatedVideo = () => {
    return (
        <div>
            <div
                        class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
                    >
                        <!-- single related video -->
                       <RelatedSingleVideo />
                    </div>
        </div>
    );
};

export default RelatedVideo;