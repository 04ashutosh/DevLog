package com.devlog.api.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class LogEntryRequest {
    private LocalDate logDate;
    private String summary;
    private List<WorkItemDto> workItems;
}
