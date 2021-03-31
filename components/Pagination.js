export default function Pagination() {
    return (
        <div className="my-5 text-center pagination d-none">
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item disabled">
                        <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">
                            Previous
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">
                            1
                        </a>
                    </li>
                    <li className="page-item btn btn-sm btn-secondary" aria-current="page">
                        <a className="page-link" href="/">
                            2 <span className="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
