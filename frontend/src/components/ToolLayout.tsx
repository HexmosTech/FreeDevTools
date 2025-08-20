import React from 'react';

interface ToolLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

const ToolLayout: React.FC<ToolLayoutProps> = ({ title, description, children }) => {
    return (
        <div className="min-h-screen">
            {/* Header Section - Always Centered */}
            <div className="w-full">
                <div className="max-w-7xl mx-auto px-6 py-8 text-center">
                    <h1 className="text-3xl font-bold text-foreground mb-4">
                        {title}
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        {description}
                    </p>
                </div>
            </div>

            {/* Main Content Section - Adjusted for Banner on Desktop */}
            <div className="lg:pr-80">
                <div className="max-w-7xl mx-auto px-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ToolLayout;