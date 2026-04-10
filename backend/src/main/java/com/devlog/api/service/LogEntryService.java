package com.devlog.api.service;

import com.devlog.api.domain.*;
import com.devlog.api.dto.*;
import com.devlog.api.domain.LogEntry;
import com.devlog.api.domain.WorkItem;
import com.devlog.api.dto.LogEntryRequest;
import com.devlog.api.repository.LogEntryRepository;
import com.devlog.api.repository.ProjectRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service @RequiredArgsConstructor
public class LogEntryService {
    private final LogEntryRepository logEntryRepository;
    private final ProjectRepository projectRepository;

    @Transactional
    public LogEntry createLogEntry(LogEntryRequest request){
        LogEntry entry = new LogEntry();
        entry.setLogDate(request.getLogDate());
        entry.setSummary(request.getSummary());

        List<WorkItem> workItems = request.getWorkItems().stream().map(dto->{
            WorkItem item = new  WorkItem();
            item.setTitle(dto.getTitle());
            item.setDurationMinutes(dto.getDurationMinutes());
            item.setLogEntry(entry);
            Project project = projectRepository.findById(dto.getProjectId())
                    .orElseThrow(()->new RuntimeException("Project not found: "+dto.getProjectId()));
            item.setProject(project);
            return item;
        }).collect(Collectors.toList());

        entry.setWorkItems(workItems);
        return logEntryRepository.save(entry);
    }

    public List<LogEntry> getAllLogs(){
        return logEntryRepository.findAll();
    }
}
