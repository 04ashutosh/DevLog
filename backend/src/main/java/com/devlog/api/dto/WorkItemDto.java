package com.devlog.api.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class WorkItemDto {
    private UUID projectId;
    private String title;
    private Integer durationMinutes;
}
