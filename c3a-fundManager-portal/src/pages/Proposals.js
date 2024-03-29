import ArticleIcon from "@mui/icons-material/Article";
import branding from '../css/branding.module.scss';
import {Container, Divider} from "@mui/material";
import SearchBar from "../components/SearchBar";
import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {proposalStatuses as statuses, proposals, courseCategories, courseTypes, courseFormats } from '../data'
import { DataGrid } from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";
import StyleStatusChin from "../components/StatusChin";
import {formatPrice} from "../helpers";


function Proposals() {
    const  navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search)
    const queryStatus = queryParams.get("status")
    const columns = [
        {
            field: 'courseCode',
            headerName: 'Course Code',
            width: 150,
            renderHeader: () => (
                <div className={branding.tableColHeader}>Course Code</div>
            ),
            renderCell: (params) => (<span className={`${branding.tableCell} ${branding.linkToProposalForm}`} onClick={() => navigate(`/proposals/${params.value}`)}>{params.value}</span>)
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 300,
            renderHeader: () => (
                <div className={branding.tableColHeader}>Title</div>
            ),
            renderCell: (params) => (<span className={branding.tableCell}>{params.value}</span>)
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 250,
            renderHeader: () => (
                <div className={branding.tableColHeader}>Status</div>
            ),
            renderCell: (params) => (<StyleStatusChin status={params.value} />),
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 200,
            renderHeader: () => (
                <div className={branding.tableColHeader}>Type</div>
            ),
            renderCell: (params) => (<span className={branding.tableCell}>{params.value}</span>)
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 200,
            renderHeader: () => (
                <div className={branding.tableColHeader}>Category</div>
            ),
            renderCell: (params) => (<span className={branding.tableCell}>{params.value}</span>)
        },
        {
            field: 'fullCourseFee',
            headerName: 'Full course fees per pax ($) before subsidy',
            width: 300,
            type: 'number',
            renderHeader: () => (
                <div className={branding.tableColHeader}>Full course fees</div>
            ),
            renderCell: (params) => (<span className={branding.tableCell}>{params.value ? formatPrice(params.value) : ''}</span>)
        },
        {
            field: 'fundingLevel',
            headerName: 'Funding Level',
            width: 300,
            type: 'number',
            renderHeader: () => (
                <div className={branding.tableColHeader}>Funding Level</div>
            ),
            renderCell: (params) => (<span className={branding.tableCell}>{params.value ? formatPrice(params.value) : ''}</span>)
        },
    ];

    // for status filter
    const tempStatusMap = {};
    statuses.forEach((status) => {
        if (queryStatus && status.name.includes(queryStatus)) {
            tempStatusMap[`${status.name}`] = true;
        } else {
            tempStatusMap[`${status.name}`] = false;
        }
    });
    const [stateStatus, setStateStatus] = useState(tempStatusMap);
    const [rows, setRows] = useState(() => {
        // auto filter if query in url
        if (queryStatus) return proposals.filter(x => x.status.includes(queryStatus));
        return proposals.filter(x => x.status !== 'draft');
    });

    const tickUntickStatus = (event) => {
        setStateStatus({
            ...stateStatus,
            [event.target.name]: event.target.checked,
        });
        stateStatus[event.target.name] = event.target.checked
        applyFilter();
    };

    // for submission date
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // clear fitler
    const clearFitler = () => {
        setStartDate(new Date());
        setEndDate(new Date());
        setStateStatus(tempStatusMap)
        setRows(proposals);
    }

    const applyFilter = (searchTerm) => {
        const selectedStatuses = [];
        let results = [...proposals.filter(x => x.status !== 'draft')];
        statuses.forEach((status) => {
            if (stateStatus[`${status.name}`]) {
                selectedStatuses.push(status.name)
            }
        });
        if (selectedStatuses.length) {
            results = results.filter(x => selectedStatuses.includes(x.status));
        }
        if (searchTerm) {
            results = results.filter((x) => x.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        setRows(results);
    }


    return (
        <div className={branding.proposalsPage}>
            <div className={branding.bodyContainer}>
                <div className={branding.heading}>
                    All Proposals
                </div>
                <div className={branding.searchSection}>
                    <button>Reprocess Submissions</button>
                </div>
                <div className={branding.searchSection}>
                    <div style={{marginBottom: "24px"}}>
                        <SearchBar onSearch={applyFilter}/>
                    </div>
                    <div className={branding.filteredByHeading}>
                        Filtered By
                        <span onClick={clearFitler}
                            style={{fontWeight: "normal", cursor: "pointer", color: "#006fc6", marginLeft: "12px", fontSize: "24px"}}>Clear Filter</span>
                    </div>
                    {/*status*/}
                    <div className={branding.filterContainer}>
                        <div className={branding.filterLabel}>Status: </div>
                        <div className={branding.filterOptions}>
                            {statuses.map((status) => (
                                <div className={branding.statusOption} key={status.name}>
                                    <input type="checkbox" id={status.name} name={status.name} checked={stateStatus[`${status.name}`]} onChange={tickUntickStatus} />
                                    <label htmlFor={status.name}> {status.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={branding.filterContainer}>
                        <div className={branding.filterLabel}>Category: </div>
                        <div className={branding.filterOptions}>
                            {courseCategories.map((x) => (
                                <div className={branding.statusOption} key={x}>
                                    <input type="checkbox" id={x} name={x}  />
                                    <label htmlFor={x}> {x}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={branding.filterContainer}>
                        <div className={branding.filterLabel}>Type: </div>
                        <div className={branding.filterOptions}>
                            {courseTypes.map((x) => (
                                <div className={branding.statusOption} key={x}>
                                    <input type="checkbox" id={x} name={x}  />
                                    <label htmlFor={x}> {x}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={branding.filterContainer}>
                        <div className={branding.filterLabel}>Format: </div>
                        <div className={branding.filterOptions}>
                            {courseFormats.map((x) => (
                                <div className={branding.statusOption} key={x}>
                                    <input type="checkbox" id={x} name={x}  />
                                    <label htmlFor={x}> {x}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={branding.filterContainer}>
                        <div className={branding.filterLabel}>Funding Level: </div>
                        <div className={branding.filterOptions}>
                            From <input type='number' style={{margin: '0 12px'}}/> to <input type='number' style={{margin: '0 12px'}} />
                        </div>
                    </div>
                </div>
                <div className={branding.tableContainer}>
                    <DataGrid
                        rows={rows}
                        getRowHeight={() => 'auto'}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                        sx={{
                            border: '4px solid black',
                            '& .MuiDataGrid-columnHeaders': {
                                borderBottom: '4px solid black',
                            }, '& .MuiDataGrid-row': {
                                borderBottom: '2px solid black',
                            }
                        }}
                    />
                </div>
            </div>
        </div>
        )
}

export default Proposals;
