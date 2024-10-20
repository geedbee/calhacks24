'use client';
import { Container, Box } from '@mui/material';
import { useState, useCallback, useEffect } from 'react';
import AvatarPage from './components/AvatarPage';
import Chat from './components/Chat';

function Page5() {
    const [leftWidth, setLeftWidth] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = useCallback(() => {
        setIsDragging(true);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMouseMove = useCallback(
        (e) => {
            if (isDragging) {
                const newLeftWidth = (e.clientX / window.innerWidth) * 100;
                setLeftWidth(Math.max(10, Math.min(90, newLeftWidth)));
            }
        },
        [isDragging]
    );

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <Container maxWidth={false} disableGutters sx={{ height: '100vh', display: 'flex', overflow: 'hidden' }}>
            <Box sx={{ width: `${leftWidth}%`, p: 2, overflow: 'auto' }}>
                <AvatarPage />
            </Box>
            <Box
                sx={{
                    width: '10px',
                    backgroundColor: 'gray',
                    cursor: 'col-resize',
                    transition: 'background-color 0.3s',
                    '&:hover': {
                        backgroundColor: 'darkgray',
                    },
                }}
                onMouseDown={handleMouseDown}
            />
            <Box sx={{ width: `${100 - leftWidth}%`, p: 2, overflow: 'auto' }}>
                <Chat />
            </Box>
        </Container>
    );
}

export default Page5;
