package com.chessacademy.srinath.service;



import java.util.List;

import com.chessacademy.srinath.dto.request.InstituteRequest;
import com.chessacademy.srinath.dto.response.InstituteResponse;

public interface InstituteService {
    List<InstituteResponse> getAllInstitutes();
    InstituteResponse getInstituteById(Long instituteId);
    InstituteResponse createInstitute(InstituteRequest instituteRequest);
    InstituteResponse updateInstitute(Long instituteId, InstituteRequest instituteRequest);
    void deleteInstitute(Long instituteId);
}
