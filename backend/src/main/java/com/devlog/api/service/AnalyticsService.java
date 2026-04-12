package com.devlog.api.service;

import com.devlog.api.domain.WorkItem;
import com.devlog.api.repository.LogEntryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AnalyticsService {
    private final LogEntryRepository logEntryRepository;

    public Map<String, Integer> getProjectStats() {
        return logEntryRepository.findAll().stream()
                .flatMap(log -> log.getWorkItems().stream())
                .collect(Collectors.groupingBy(
                        item -> item.getProject().getName(),
                        Collectors.summingInt(WorkItem::getDurationMinutes)));
    }
}
