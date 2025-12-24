export const profileData = {
            experience: [
                {
                    id: 'datum',
                    role: 'Senior .NET Developer',
                    company: 'Datum',
                    period: 'Oct 2025 – Present',
                    location: 'Porto Alegre, RS',
                    summary: 'Architecting secure backend solutions using C# and Azure AI, focusing on security and CI/CD automation.',
                    details: [
                        'Architecting secure backend solutions using C# and Azure AI.',
                        'Implementing OAuth2 flows via MSAL for robust auth standards.',
                        'Designing event-driven microservices using Azure Service Bus & Functions.',
                        'Building comprehensive CI/CD pipelines in Azure DevOps.'
                    ],
                    tech: ['C#', '.Net core', 'EntityFramework', 'EF Core', 'Dapper', 'Azure AI', 'Azure Service Bus', 'Azure Functions', 'MSAL/OAuth2', 'Azure DevOps']
                },
                {
                    id: 'yara',
                    role: 'Software Developer II',
                    company: 'Yara International',
                    period: 'Oct 2023 – Oct 2025',
                    location: 'Porto Alegre, RS',
                    summary: 'Distributed REST APIs for global applications in a hybrid cloud environment (AWS & Azure).',
                    details: [
                        'Developed distributed REST APIs using C#/.NET and React.',
                        'Implemented orchestration patterns using AWS SQS, Lambda, and Azure Service Bus.',
                        'Managed high-volume ship control data.',
                        'Mentored junior developers on GitHub Copilot usage.'
                    ],
                    tech: ['C#', '.Net core', 'EntityFramework', 'EF Core', 'Dapper', '.NET', 'React', 'AWS SQS', 'AWS Lambda', 'Azure Service Bus', 'GitHub Copilot']
                },
                {
                    id: 'numeria',
                    role: 'Software Developer II',
                    company: 'Numeria',
                    period: 'May 2023 – Aug 2023',
                    location: 'Porto Alegre, RS',
                    summary: 'Modernized public sector legacy systems to Azure cloud-native architectures.',
                    details: [
                        'Migrated legacy systems to cloud-native Azure architectures.',
                        'Enhanced frontend-backend interoperability using Vue.js and TypeScript.',
                        'Established standardized API documentation using Swagger/OpenAPI.'
                    ],
                    tech: ['C#', '.Net core', 'EntityFramework', 'EF Core', 'Dapper', 'Azure', 'Vue.js', 'TypeScript', 'Swagger', 'Legacy Migration']
                },
                {
                    id: 'ntt',
                    role: 'Software Developer II',
                    company: 'NTT DATA Europe & Latam',
                    period: 'Aug 2022 – Jan 2023',
                    location: 'Brazil',
                    summary: 'Refactored energy sector REST APIs and implemented automated CI/CD workflows.',
                    details: [
                        'Refactored energy sector APIs using .NET Core and Dapper.',
                        'Optimized PostgreSQL database query performance.',
                        'Implemented automated CI/CD workflows on GitHub.'
                    ],
                    tech: ['C#', '.Net core', 'EntityFramework', 'EF Core', 'Dapper', '.NET Core', 'PostgreSQL', 'GitHub Actions', 'CI/CD']
                },
                {
                    id: 'neogrid',
                    role: 'Software Developer & Squad Leader',
                    company: 'Neogrid',
                    period: 'Dec 2020 – Aug 2022',
                    location: 'Porto Alegre, RS',
                    summary: 'Led a squad to increase industrial data precision by 85%.',
                    details: [
                        'Increased industrial data precision by 85% through algorithm re-engineering.',
                        'Led a cross-functional squad of 3 developers.',
                        'Developed robust backend services with complex auth logic.'
                    ],
                    tech: ['C#', '.Net core', 'EntityFramework', 'EF Core', 'Dapper', 'Squad Leadership', 'SQL Server', 'Data Optimization', 'Backend Security']
                },
                {
                    id: 'sequor',
                    role: 'Software Developer',
                    company: 'Sequor Industrial Software',
                    period: 'Sep 2019 – Nov 2020',
                    location: 'Brazil',
                    summary: 'Built real-time communication tools and event-driven messaging systems.',
                    details: [
                        'Built real-time web/voice chat using WebSockets and WebRTC.',
                        'Implemented event-driven messaging with RabbitMQ.',
                        'Utilized MongoDB for 3D virtualization data.'
                    ],
                    tech: ['C#', '.Net core', 'EntityFramework', 'EF Core', 'Dapper', 'WebSockets', 'WebRTC', 'TypeScript', 'RabbitMQ', 'MongoDB', 'React', 'Redux', 'Next.js']
                }
            ],
            skills: {
                backend: {
                    labels: ['C# / .NET Core', 'TypeScript', 'Node.js/Nest.js', 'Entity Framework', 'Dapper', 'SQL', 'React', 'Redux', 'Next.js'],
                    data: [95, 90, 85, 85, 80, 85, 90, 85, 80], // Estimated proficiency based on resume emphasis
                    color: 'rgba(217, 119, 6, 0.7)' // Amber
                },
                cloud: {
                    labels: ['Azure Service Bus', 'Azure Functions', 'AWS SQS/Lambda', 'Docker/K8s', 'CI/CD Pipelines', 'Azure AI'],
                    data: [90, 90, 80, 75, 85, 70],
                    color: 'rgba(14, 165, 233, 0.7)' // Sky Blue
                },
                architecture: {
                    labels: ['RESTful APIs', 'Microservices', 'Event-Driven', 'DDD', 'SOLID', 'Design Patterns'],
                    data: [95, 90, 95, 80, 90, 85],
                    color: 'rgba(168, 162, 158, 0.7)' // Stone
                }
            }
        };
