import React from 'react';
import { Box, Text, Newline } from 'ink';
import Spinner from 'ink-spinner';

interface Props {
  dryRun: boolean;
  targetPath: string;
  status: string;
  complete: boolean;
}

export default function Header({ dryRun, targetPath, status, complete }: Props) {
  return (
    <Box flexDirection="column">
      <Box>
        <Text bold color="cyan">Media File Organizer</Text>
        <Text> - {dryRun ? 'DRY RUN MODE' : 'EXECUTION MODE'}</Text>
      </Box>
      <Text color="gray">Path: {targetPath}</Text>
      <Newline />
      {!complete && (
        <Box>
          <Text color="green"><Spinner type="dots" /></Text>
          <Text> {status}</Text>
        </Box>
      )}
      <Newline />
    </Box>
  );
}
